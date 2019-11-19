import React ,{Component} from "react";
import FoodItem from './FoodItem'
export default class FoodList extends Component{
    render(){
        const {items,handleEdit,handleDelete,clearList}=this.props
        return(
            <ul className="list-group my-4">
                <h3>รายการอาหาร</h3>
                {items.map(item=>{
                    return(
                        <FoodItem 
                        key={item.id} 
                        name={item.name} 
                        handleDelete={()=>handleDelete(item.id)}
                        handleEdit={()=>handleEdit(item.id)}
                        />
                    )
                })}
                <div>
                    <button className="btn btn-danger font-weight-bold" onClick={clearList}>Clear Food</button>
                </div>
            </ul>
        )
    }
}