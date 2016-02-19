import 'script!./util/Global';
import SharedUtil1 from '../../SharedUtilities/SharedUtility1';
import Lib1 from './shared/lib1';

class Contacts{
    constructor(data){
        this.data = data;
        this.sharedUtil1 = new SharedUtil1();
        this.lib1 = new Lib1();
    }
    contactsMethod1(){

    }
    contactsMethod2(){

    }
    contactsMethod3(){

    }
}

export default Contacts;