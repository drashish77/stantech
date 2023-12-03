const EditForm = ({
  id,
  name,
  dueDate,
  modalOpenHandler,
  status,
  onSubmit,
  closeFormHandler,
  handleChange,
  ref,
}) => {
  return (
    <form className='edit_form' key={id} onSubmit={(e) => onSubmit(e, id)}>
      <div className='edit_form_name_email'>
        <label htmlFor='name'>Task Name</label>
        <input
          type='text'
          name='name'
          placeholder='enter task Name'
          value={name}
          ref={ref}
          onChange={handleChange}
          required
        />
        <div className=''>
          <p>Status</p> 
          <input
            type='radio'
            id='active'
            name='status'
            value='active'
            onChange={handleChange}
            // checked={() => status === 'active' && 'checked'}
          />
           <label htmlFor='active'>Active</label> {' '}
          <input
            type='radio'
            id='inactive'
            name='status'
            value='inactive'
            onChange={handleChange}
            // checked={status === 'inactive' && 'checked'}
          />
           <label htmlFor='inactive'>Inactive</label>
        </div>

        <div className=''>
          <label htmlFor='dueDate'>Due Date:</label>
          <input
            type='date'
            id='dueDate'
            name='dueDate'
            onChange={handleChange}
            value={dueDate}
            className=''
          />
        </div>

        <button type='submit'>Update</button>
        <button
          type='button'
          className='form__close'
          onClick={closeFormHandler}
        >
          <i className='far fa-times-circle'></i>
        </button>
      </div>
    </form>
  )
}

export default EditForm
