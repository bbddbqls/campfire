					document.addEventListener("DOMContentLoaded", function () {
						var exBox = document.querySelector(".exBox");
						var exText = document.querySelector(".exText");

						// 등록 예시 보기 클릭 및 마우스 호버 시 이벤트 핸들러
						exBox.addEventListener("click", function () {
							if (exText.style.display === "block") {
								exText.style.display = "none";
							} else {
								exText.style.display = "block";
							}
						});

						exBox.addEventListener("mouseenter", function () {
							exBox.style.cursor = "pointer"; // 포인터 커서로 변경
						});

						exBox.addEventListener("mouseleave", function () {
							exBox.style.cursor = "default"; // 기본 커서로 변경
						});

						document.getElementById("searchButton").addEventListener("click", function () {
							let businessNum = document.getElementById("businessNum").value;
							let businessCreateDate = document.getElementById("businessCreateDate").value;
							let businessRepName = document.getElementById("businessRepName").value;
							let businessName = document.getElementById("businessName").value;
							let test = 0;
							let brSTTCD = 0;
							if (businessNum === "") {
								alertFunction("사업자 번호를 입력해 주세요", "error");
								return;
							}
							if (businessCreateDate === "") {
								alertFunction("개업일자를 입력해 주세요", "error");
								return;
							}
							if (businessRepName === "") {
								alertFunction("대표명을 입력해 주세요", "error");
								return;
							}
							if (businessName === "") {
								alertFunction("상호명을 입력해 주세요", "error");
								return;
							}
							// 입력한 사업자 등록 번호 가져오기
							var data = {
								"businesses": [
									{
										"b_no": businessNum,
										"start_dt": businessCreateDate,
										"p_nm": businessRepName,
										"b_nm": businessName
									}
								]
							};

							$.ajax({
								url: "https://api.odcloud.kr/api/nts-businessman/v1/validate?serviceKey=UqlvtC8zRoUlf8BkLABvZQyJVaZfv%2Fqy3Fwl5WNbw3bLbqRHX2jUyzVdwDDPCyyFHeU4fcRQDnskRRJN0llchA%3D%3D",
								type: "POST",
								data: JSON.stringify(data),
								dataType: "JSON",
								contentType: "application/json",
								accept: "application/json",
								success: function (result) {
									console.log(result);
									console.log(result.data[0].valid);

									if (result.data[0].valid == 01) {
										test = 1;
										console.log(test);
										console.log("result.data[0].status.b_stt_cd =" + result.data[0].status.b_stt_cd);
										brSTTCD = result.data[0].status.b_stt_cd;

										const form = document.getElementById('searchForm');

										const newInput = document.createElement('input');
										newInput.type = 'hidden';
										newInput.name = 'brSttCd';
										newInput.value = result.data[0].status.b_stt_cd;
										newInput.style.display = 'none';

										form.appendChild(newInput);
										console.log("실헹");
										form.submit();
									} else {
										alertFunction("다시한번 확인해주세요", "error");
									}

								},
								error: function (result) {
									console.log(result.responseText); //responseText의 에러메세지 확인
								}
							});
							if (test == 1) {


							}
						});

						function alertFunction(msg, status) {
							Swal.fire({
								icon: status,
								title: status,
								text: msg
							});
						}
					});