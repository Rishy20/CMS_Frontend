import React from "react";
import PageTitle from "./PageTitle";
import "./styles/Tickets.css"
import Button from "./Button";
import TicketType from "./TicketType";
import TicketFeatures from "./TicketFeatures";
import useForm from "./useForm";
import validate from "./validateInfo";
import {useFetch} from "./useFetch";

function Tickets({setTicket,back,ticket}){

    const [isSelected,setIsSelected] = React.useState(ticket);
    const [error, setError] = React.useState(false)
    // const {handleChange, handleSubmit, values, errors } = useForm(detailsEntered,validate,val,url,setValue );
    const {data} = useFetch("https://icaf.site/api/v1/tickets")
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
                                    isSelected={isSelected}
                                />
                            }


                        })
                }

            </div>
            {/*<table className="ticket-table">*/}
            {/*    <thead>*/}
            {/*    <tr className="ticket-heading">*/}
            {/*        <th></th>*/}
            {/*        <th>*/}
            {/*            <TicketType name="VIP Pass" price="1500" description="Get the full experience with access to the in-personas well as the digital event. Limited availability." onClick={setIsSelected} isSelected={isSelected}/>*/}
            {/*        </th>*/}
            {/*        <th>*/}
            {/*            <TicketType name="Premium Pass" price="2500" description="Get the full experience with access to the in-personas well as the digital event. Limited availability." onClick={setIsSelected} isSelected={isSelected}/>*/}
            {/*        </th>*/}
            {/*        <th>*/}
            {/*            <TicketType name="Platinum Pass" price="5000" description="Get the full experience with access to the in-personas well as the digital event. Limited availability." onClick={setIsSelected} isSelected={isSelected}/>*/}
            {/*        </th>*/}
            {/*        <th>*/}
            {/*            <TicketType name="Conference Pass" price="500" description="Get the full experience with access to the in-personas well as the digital event. Limited availability." onClick={setIsSelected} isSelected={isSelected}/>*/}
            {/*        </th>*/}
            {/*    </tr>*/}

            {/*    </thead>*/}
            {/*    <tbody>*/}
            {/*    <TicketFeatures/>*/}
            {/*    <TicketFeatures/>*/}
            {/*    <TicketFeatures/>*/}
            {/*    <TicketFeatures/>*/}
            {/*    </tbody>*/}
            {/*</table>*/}
            <p className="ticket-error">{error?"Please Select a Ticket":''}</p>
            <div className="next-btn">
                <Button btnStyle="btn-next" name="Next" onclick={handleSelect} />
                <Button btnStyle="btn-cancel" name="Cancel" onclick={back}/>
            </div>

        </div>
    )
}
export default Tickets