function clc()
		{
			var y=parseFloat(document.getElementById("Year").value)
			var m=parseFloat(document.getElementById("Month").value)
			var d=parseFloat(document.getElementById("Date").value)
			// document.getElementById("result1").value=m;
			// document.getElementById("result2").value=d;
			// document.getElementById("result3").value=y;
			
				if(m==1 ||m==3||m==5||m==7||m==8||m==10||m==12)
				{
					if(d>31||d<1)

					{
						document.getElementById("result").value="Invalid date";
					}
					else
					{
						if(m==1)
						{
							var dd=d-14;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+31;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=9;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=10;

							}
						}
						if(m==3)
						{
							var dd=d-15;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+31;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=11;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=12;

							}
						}
						if(m==5)
						{
							var dd=d-15;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+32;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=1;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=2;

							}
						}
						if(m==7)
						{
							var dd=d-16;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+32;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=3;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=4;

							}
						}
						if(m==8)
						{
							var dd=d-16;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+32;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=4;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=5;

							}
						}
						if(m==10)
						{
							var dd=d-16;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+31;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=6;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=7;

							}
						}
						if(m==12)
						{
							var dd=d-15;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+31;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=8;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=9;

							}
						}
				    }

				}
				else if(m==4 ||m==6||m==9||m==11)
				{
					if(d>30||d<1)

					{
						document.getElementById("result").value="Invalid date";
					}
					else
					{
						if(m==4)
						{
							var dd=d-14;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+31;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=12;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=1;

							}
						}
						if(m==6)
						{
							var dd=d-15;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+32;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=2;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=3;

							}
						}
						if(m==9)
						{
							var dd=d-16;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+32;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=5;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=6;

							}
						}
						if(m==11)
						{
							var dd=d-15;
							//document.getElementById("result3").value=dd;
							if(dd<0)
							{
								dd=dd+31;
								document.getElementById("result").value=dd;
								document.getElementById("result1").value=7;
							}
							else
							{
								document.getElementById("result").value=dd+1;
								document.getElementById("result1").value=8;

							}
						}

					}
				}
				else if(m==2)
				{
					if(y%400==0 || (y%4==0 && y%100==0))
					{
						if(d>29 || d<1)
						{
							document.getElementById("result").value="Invalid date";
						}
						else
								{
									var dd=d-13;
									//document.getElementById("result3").value=dd;
									if(dd<0)
									{
										dd=dd+31;
										document.getElementById("result").value=dd;
										document.getElementById("result1").value=10;
									}
									else
									{
										document.getElementById("result").value=dd+1;
										document.getElementById("result1").value=11;

									}
						        }
					}
						else
						{
								if(d>28 || d<1)
								{
									document.getElementById("result").value="Invalid date";
								}
								else
								{
									var dd=d-13;
									//document.getElementById("result3").value=dd;
									if(dd<0)
									{
										dd=dd+31;
										document.getElementById("result").value=dd;
										document.getElementById("result1").value=10;
									}
									else
									{
										document.getElementById("result").value=dd+1;
										document.getElementById("result1").value=11;

									}
						        }
						}
						
						
					
				}
				else
				{
					document.getElementById("result1").value="Invalid Month";
				}
				if(y<593)
				{
					document.getElementById("result2").value="Invalid Year";
				}
				else
				{
						if(m>4)
						{
							document.getElementById("result2").value=y-593;
						}
						else if(m<4)
						{
							document.getElementById("result2").value=y-594;
						}
						else
						{
							if(d>=14)
							{
								document.getElementById("result2").value=y-593;
							}
							else
							{
								document.getElementById("result2").value=y-594;
							}
						}
				}

			
			
		}