function solution(denum1, num1, denum2, num2) {
  //분모 분자 각각구하기
  let topNum = denum1*num2 + denum2*num1;
  let bottomNum = num1*num2;
  //값 초기화
  var top = 0;
  var bottom = 0;
  top = topNum;
  bottom = bottomNum;
  for(i=2; i<= topNum; i++){
      if(topNum % i == 0 && bottomNum % i == 0){
          top = topNum / i;
          bottom = bottomNum / i;
      }
      
  }
  var answer = [top,bottom];
  return answer;
}    