$(document).ready(() => {
    SDK.loadNav();
    const $specificEventTable = $("#specificEventTable");
    const eventId =$(this).data("event-id");
    const event = event.find((event) => event.id == eventId)

    SDK.Storage.persist("eventId", eventId);
    SDK.Event.specificEvent((err, event) => {
        console.log(event);


    SDK.Event.specificEvent((err, events) =>{

        events.forEach((Event) =>{
            const specificEventHTML =`
                <tr>
                <td>${Event.title}</td>
                <td>${Event.description}</td>
                <td>${Event.startDate}</td>
                <td>${Event.endDate}</td>
                <td>${Event.posts}</td>
                <td>${Event.participants}</td>
                
                </tr>
                `;

            $specificEventTable.append(specificEventHTML)

        });
    });
});
