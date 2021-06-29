import React from "react";
import PageTitle from "./PageTitle";
import "./styles/Tickets.css"
import Button from "./Button";
import TicketType from "./TicketType";
import {useFetch} from "./useFetch";

function Tickets({setTicket,back,ticket}){

    const [isSelected,setIsSelected] = React.useState(ticket);
    const [error, setError] = React.useState(false)
    // const {handleChange, handleSubmit, values, errors } = useForm(detailsEntered,validate,val,url,setValue );
    const {data} = useFetch("https://api.icaf.site/api/v1/tickets")
    function handleSelect(){
        if(isSelected !== null){
            setTicket(isSelected);
            setError(false);
        }else{
            setError(true);
        }
    }
    return(
        <div className="tickets">
            <PageTitle title="TICKET INFORMATION"/>
            <div className={"ticket-body"}>
                {
                    data &&
                        data.map(ticket=>{
                            {
                                return parseInt(ticket.qty) > 0 &&
                                 <TicketType
                                    name={ticket.name}
                                    price={ticket.price}
                                    description= {ticket.description}
                                    onClick={setIsSelected}
                                    isSelected={isSelected.name}
                                />
                            }


                        })
                }

            </div>

            <p className="ticket-error">{error?"Please Select a Ticket":''}</p>
            <div className="next-btn">
                <Button btnStyle="btn-next" name="Next" onclick={handleSelect} />
                <Button btnStyle="btn-cancel" name="Back" onclick={back}/>
            </div>

        </div>
    )
}
export default Tickets