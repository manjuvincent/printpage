

import React, {useState } from 'react';
import './App1.css';
function App1() {
    const [qty1, setQty1Value] = useState("");

  function GetPrint1()
{
    /*For Print*/
    window.print();
}

function handleQtyChange(event) {
    setQty1Value(event.target.value);
}
  return (
    <div className="App1">
     <div className="container ">
       

       <div className="card">
           <div className="card-header text-center">
             <h4>INVOICE</h4>
           </div>
           <div className="card-body">

               <div className="row">
                   <div className="col-8">
                       <div className="input-group mb-3">
                           <span className="input-group-text" >Customer</span>
                           <input type="text" className="form-control" placeholder="Customer"  />
                       </div>
           
                       <div className="input-group mb-3">
                           <span className="input-group-text" >Address</span>
                           <input type="text" className="form-control" placeholder="Address"  />
                       </div>
           
                       <div className="input-group mb-3">
                           <span className="input-group-text" >City</span>
                           <input type="text" className="form-control" placeholder="City"  />
                       </div>
                   </div>
                   <div className="col-4">
                     
                       <div className="input-group mb-3">
                           <span className="input-group-text" >Inv. No</span>
                           <input type="text" className="form-control" placeholder="Inv. No"  />
                       </div>

                       <div className="input-group mb-3">
                           <span className="input-group-text" >Inv. Date</span>
                           <input type="date" className="form-control" placeholder="Inv. Date"  />
                       </div>



                   </div>
               </div>


               <table className="table table-bordered">
                   <thead className="table-success">
                     <tr>
                       <th scope="col">#</th>
                       <th scope="col">Particular</th>
                       <th scope="col" className="text-end">Qty</th>
                       <th scope="col" className="text-end">Rate</th>
                       <th scope="col" className="text-end">Amount</th>
                       <th scope="col" className="NoPrint">                         
                           <button type="button" className="btn btn-sm btn-success" onclick="BtnAdd()">+</button>
                         
                       </th>

                     </tr>
                   </thead>
                   {/* <tbody id="TBody">
                     <tr id="TRow" className="d-none">
                       <th scope="row">1</th>
                       <td><input type="text" className="form-control" /></td>
                       <td><input type="number" className="form-control text-end" name="qty" onchange="Calc(this);"/></td>
                       <td><input type="number" className="form-control text-end" name="rate"  onchange="Calc(this);"/></td>
                       <td><input type="number" className="form-control text-end" name="amt" value="0" disabled=""/></td>
                       <td className="NoPrint"><button type="button" className="btn btn-sm btn-danger" onclick="BtnDel(this)">X</button></td>
                     </tr>
                   </tbody> */}
                    <tbody id="TBody">
                     <tr id="TRow" className="d-none">
                       <th scope="row">1</th>
                       <td><input type="text" className="form-control" /></td>
                       <td><input type="number" className="form-control text-end" name="qty" value={ qty1 } onChange={ handleQtyChange }/></td>
                       <td><input type="number" className="form-control text-end" name="rate"  onchange="Calc(this);"/></td>
                       <td><input type="number" className="form-control text-end" name="amt" value="0" disabled=""/></td>
                       <td className="NoPrint"><button type="button" className="btn btn-sm btn-danger" onclick="BtnDel(this)">X</button></td>
                     </tr>
                   </tbody>
                 </table>


                 <div className="row">
                   <div className="col-8">
                     
                       {/* <button type="button" className="btn btn-primary" onclick="GetPrint()">Print</button> */}
                       <button type="button" className="btn btn-primary" onClick={() => GetPrint1()}>Print</button>
                   </div>
                   {/* <div className="col-4">
                       <div className="input-group mb-3">
                           <span className="input-group-text" >Total</span>
                           <input type="number" className="form-control text-end" id="FTotal" name="FTotal" disabled=""/>
                       </div>
                       <div className="input-group mb-3">
                           <span className="input-group-text" >GST</span>
                           <input type="number" className="form-control text-end" id="FGST" name="FGST" onchange="GetTotal()"/>
                       </div>
                       <div className="input-group mb-3">
                           <span className="input-group-text" >Net Amt</span>
                           <input type="number" className="form-control text-end" id="FNet" name="FNet" disabled=""/>
                       </div>


                   </div> */}
               </div>
            </div>
         </div>

   </div>
    </div>
  );
}

export default App1;
