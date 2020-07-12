var arr=[3,5,2,4,1,66,88];
alert(arr.length);
//冒泡排序

m=0;
for(var i=0;i<arr.length-1;i++)
{
    for(var j=0;j<arr.length-i-1;j++)
    {
        if(arr[j]>arr[j+1])
        {
            m=arr[j+1];
            arr[j+1]=arr[j];
            arr[j]=m;
        }
    }
}
alert(arr);