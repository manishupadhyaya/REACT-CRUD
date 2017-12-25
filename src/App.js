import React, {Component} from 'react';
class Doorhopper extends Component{
constructor()
{
super();
this.state = {
  editingProcess: false,
  newShop: {shopName:"", phoneNo: "", address: "" },
  shops: []
}


}
_shopEditor(){
  this.setState({editingProcess: true});
  console.log(this.state.editingProcess);//For Checking
}
_addShop(){
   this.setState(
     { shops: [...this.state.shops, this.state.newShop], editingProcess: false, newShop: {shopName:'', phoneNo: '', address: '' } 
    }
  ) 
}
_changeCurrentShop(prop, val){
  let currentShop = this.state.newShop
  currentShop[prop] = val;
  this.setState({newShop:currentShop})
  console.log(this.state.newShop);
}

render()
{
return(
<div style={{textAlign:"center",color: "#1a053b"}}>
<h1>Shopping App</h1>
{ this.state.editingProcess?(
<div style={{padding: "6vh", backgroundColor: "#1a0006"}}>
<p style={{color: "white"}}>Name Of The Shop: </p>
<input onChange={(e)=>this._changeCurrentShop('shopName',e.target.value )} type = {"text"}/>
<p style={{color: "white"}}>Phone Number: </p>
<input onChange={(e)=>this._changeCurrentShop('phoneNo',e.target.value )} type = {"text"}/>
<p style={{color: "white"}}>Adress: </p>
<input onChange={(e)=>this._changeCurrentShop('address',e.target.value )} type = {"text"}/>
<br/><br/>
<button onClick={()=> this._addShop()}>Save Shop</button>

</div>
):null
}

<ul style={{listStyleType:'none'}}>
          {
            this.state.shops.map((shop,i)=>
            (
              <li key={i} style={{margin:'5vh', backgroundColor: '#dfffb3', padding: '30px'}}>
                <h2>{shop.shopName}</h2>
                <p>Phone: {shop.phoneNo}</p>
                <p>Address: {shop.address}</p>
            </li>
)
)
}
</ul>
<div>
  <button onClick={()=> this._shopEditor()}>
    Add New Store
    </button>
  </div>
</div>
);
}

}

export default Doorhopper;