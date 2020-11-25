import  {React, Component } from 'react'
import Input from './Input'

function InputFildes() {
    return (
       <table>
           <tr>
               <td className="creditCard"><h2>Credit Card*</h2></td>
               <td><Input></Input></td>
              
               <td>
               <button class="button">Submit</button>
               </td>
               
           </tr>
       </table>
    );
  }
export default InputFildes