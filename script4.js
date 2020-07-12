var arr=[3,5,2,4,1,66,88];

//选择排序

m=0;
alert(arr);
for(var i=0;i<arr.length-1;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]>arr[j])
        {
            m=arr[j];
            arr[j]=arr[i];
            arr[i]=m;
        }
    }
}
alert(arr);


m=0;
for(var i=0;i<arr.length-1;i++)
{
    for(var j=i+1;j<arr.length;j++)
    {
        if(arr[i]<arr[j])
        {
            m=arr[j];
            arr[j]=arr[i];
            arr[i]=m;
        }
    }
}
alert(arr);