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
                </tr>
                `;

            $eventTable.append(eventsHTML)
            
        });
    });
});
