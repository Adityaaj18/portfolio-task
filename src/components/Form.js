import React, { useState } from 'react'

const Form = () => {
   const [userData, setUserData] = useState({
      name: '',
      date: '',
      feedback: '',
      message: '',
      checkbox: false,
      gender: ''
   })
   return (
      <div className="container">
         <h1>Feedback</h1>
         <form>
            <div className="form-group row">
               <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Name
               </label>
               <div className="col-sm-10">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Name"
                     onChange={(e) =>
                        setUserData({ ...userData, name: e.target.value })
                     }
                  />
               </div>
            </div>
            <br />
            <div className="form-group row">
               <label for="inputPassword3" className="col-sm-2 col-form-label">
                  Date
               </label>
               <div className="col-sm-10">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="date"
                     onChange={(e) =>
                        setUserData({ ...userData, date: e.target.value })
                     }
                  />
               </div>
            </div>
            <br />
            <div className="form-group row">
               <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Feedback Title
               </label>
               <div className="col-sm-10">
                  <input
                     type="text"
                     className="form-control"
                     placeholder="Feedback Title"
                     onChange={(e) =>
                        setUserData({ ...userData, feedback: e.target.value })
                     }
                  />
               </div>
            </div>
            <br />
            <div className="form-group row">
               <label for="inputEmail3" className="col-sm-2 col-form-label">
                  Message
               </label>
               <div className="col-sm-10">
                  <textarea
                     className="form-control"
                     placeholder="Message"
                     onChange={(e) =>
                        setUserData({ ...userData, message: e.target.value })
                     }
                  />
               </div>
            </div>
            <br />
            <fieldset className="form-group">
               <div className="row">
                  <legend className="col-form-label col-sm-2 pt-0">
                     Gender
                  </legend>
                  <div className="col-sm-10">
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="gridRadios"
                           id="gridRadios1"
                           value="male"
                           onChange={(e) =>
                              setUserData({
                                 ...userData,
                                 gender: e.target.value
                              })
                           }
                        />
                        <label className="form-check-label" for="gridRadios1">
                           Male
                        </label>
                     </div>
                     <div className="form-check">
                        <input
                           className="form-check-input"
                           type="radio"
                           name="gridRadios"
                           id="gridRadios2"
                           value="female"
                           onChange={(e) =>
                              setUserData({
                                 ...userData,
                                 gender: e.target.value
                              })
                           }
                        />
                        <label className="form-check-label" for="gridRadios2">
                           Female
                        </label>
                     </div>
                  </div>
               </div>
            </fieldset>

            <div>
               <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={() => console.log(userData)}
                  style={{ padding: '7px 35px', margin: '20px 0px' }}
               >
                  Submit
               </button>
            </div>
         </form>
      </div>
   )
}

export default Form
