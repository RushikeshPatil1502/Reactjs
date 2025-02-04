import { Button, Dialog, DialogActions, DialogTitle } from "@mui/material"

// eslint-disable-next-line react/prop-types
function TodoDetails({ todos , open , setOpenDialog , setTodoDetails }) {
  return (
    <>
      <Dialog onClose={()=> setOpenDialog(!open)} open={open}>
        <DialogTitle>{todos}</DialogTitle>
        <DialogActions>
           <Button onClick={() => {
            setOpenDialog(false)
            setTodoDetails(null)
           }}>Close</Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default TodoDetails