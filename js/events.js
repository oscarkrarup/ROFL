$(document).ready(() => {
    SDK.loadNav();
    const $eventTable = $("#eventTable");

    SDK.Event.showEvents((err, events) =>{

        events.forEach((event) =>{
            const eventsHTML =`
                <tr>
                <td>${event.title}</td>
                <td>${event.description}</td>
                <td>${event.startDate}</td>
                <td>${event.endDate}</td>
                <td>${event.created}</td>
                <td><button type="button" id="specificEvent-button" data-event-id="${event.id}">Go to Event</button></td>
                
                </tr>
                `;

            $eventTable.append(eventsHTML)
            
        });
        $("#specificEvent-button").click(() => {
            window.location.href = "specificEvent.html";

        });
    });



});
