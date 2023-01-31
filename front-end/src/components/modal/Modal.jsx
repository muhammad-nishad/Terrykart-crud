import axios from "axios";
import { useEffect, useState } from "react";
import './style.css'

const Modal = ({ sub,id }) => {
    const [modal, setModal] = useState(false);
    const [category, setCategory] = useState('')
    const [subCategory, setSubCategory] = useState('')

    const toggleModal = () => {
        setModal(!modal);
    };

    if (modal) {
        document.body.classList.add('active-modal')
    } else {
        document.body.classList.remove('active-modal')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        {
            sub ? axios.post('http://localhost:5000/addSubCategory', { subCategory,id }).then((response) => {
                console.log(response, 'responseeeeeeeee');
            })
                :

                axios.post('http://localhost:5000/addCategory', { category }).then((response) => {
                    setModal(!modal);
                    console.log(response, 'responseeeeeeeee');
                })
        }
    }
    // useEffect(()=>{

    // },[])
    return (
        <>
            <>

                <button onClick={toggleModal} className="btn-modal">
                    {
                        sub ? 'ADD SUBCATEGORY' :
                            "ADD CATEGORY"
                    }
                </button>

                {modal && (
                    <div className="modal">
                        <div onClick={toggleModal} className="overlay"></div>
                        <div className="modal-content">
                            {
                                sub ? "ADD SUB CATEGORY" :" ADD CATEGORY "
                            }
                            
                            <form onSubmit={handleSubmit} >
                                {
                                    sub ? <input type='text' name="subcategory" value={subCategory} onChange={(e) => {
                                        setSubCategory(e.target.value)

                                    }} /> : <input type='text' value={category}
                                        name='category'
                                        onChange={(e) => {
                                            setCategory(e.target.value)
                                            console.log(e.target.value);


                                        }} placeholder=" category name" />
                                }


                                <input type='submit' placeholder="ADD" />

                            </form>
                            <button className="close-modal" onClick={toggleModal}>
                                CLOSE
                            </button>
                        </div>
                    </div>
                )}

            </>
        </>
    )
}

export default Modal