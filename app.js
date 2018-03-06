var obj={
    initialAge:23,
    calculateAge:function(){
        this.initialAge+=5;
        return this.initialAge;
    }
}
 
module.exports=obj;