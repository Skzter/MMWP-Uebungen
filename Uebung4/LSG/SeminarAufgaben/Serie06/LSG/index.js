let i, sum = 0;

for(i = 0; i < 999999999; i++)
{
    sum += i + i * Math.random();
}

alert(sum);
