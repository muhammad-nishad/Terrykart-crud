import axios from 'axios'
import { useEffect, useState } from 'react'
import Modal from '../modal/Modal'
import './style.css'


const Category = () => {
    const [category, setCategory] = useState([])
    const [show, showSub] = useState(false)
    useEffect(() => {
        axios.get('http://localhost:5000/getAllCategory').then((response) => {
            setCategory(response.data)

            console.log(response.data, 'allcategoy');
        })

    }, [])


    return (
        <>
            <table id="customers">
                <tr>
                    <th>Contact</th>
                    <th>Add Sub Category</th>
                </tr>
                {
                    category.map((values) => {
                        return (
                            <tr>
                                <td>{values.category}</td>
                                <td><Modal sub={true} id={values._id}/>
                                <button onClick={() => showSub(!show)}>Show</button>
                                {show?
                                  values?.subCategory?.map((item) => {
                                      return <div>{item?.subCategoryName.subCategory}</div> 
                                })

                                 : null}
                                </td>
                                
                                
                            </tr>
                        )
                    })

                }


            </table>
        </>
    )
}

export default Category