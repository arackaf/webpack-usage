import '../../globals/Global';
import SharedUtil1 from '../../sharedUtilities/sharedUtility1';
import Lib1 from './shared/lib1';

class Contacts{
    constructor(data){
        debugger;
        this.data = data;
        this.sharedUtil1 = new SharedUtil1();
        //this.lib1 = new Lib1();

        console.log('typeof globalFunction1', typeof globalFunction1)
        console.log('typeof globalFunction2', typeof globalFunction2)
    }
    contactsMethod1(){

    }
    contactsMethod2(){

    }
    contactsMethod3(){

    }
}

export default Contacts;