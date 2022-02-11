/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
  let sum=0;
  for (let i=start; i <= end; i++) 
  if (i % 2 == 0){
   sum+=i;
  }
  return (sum);
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
  let b=0;
  if(a>=0)
  {
  while (a>0.1)
   {
    a=a/2;
    b=b+1;
   }
   return(b);
  }
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
  let message2="";
    let i=1;
    if(mess_length>=3)
    {
     do
     {
     if(i % 3 == 0) message2=message2+"_";
     else message2=message2+message[i-1];
     i=i+1;
     }while(i<=mess_length);        
    }
    return (message2);
}
