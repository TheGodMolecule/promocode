var code = null;
do{
    code = couponCode.generate();
}while(!unique(code));
 return code;
