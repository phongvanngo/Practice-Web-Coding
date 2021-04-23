import singleBoard from './listTeam.js';
const Teams = singleBoard;
console.log(Teams);
function createTeam(details) {
    // details = {
    //     emailLeader: "admin@gmail.com",
    //     joinTraining: false,
    //     paid: false,
    //     password: "admin_Webdev_Hackathon_2021@",
    //     teamName: "novapo",
    // };

    var formBody = [];
    for (var property in details) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(details[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch('https://api.hackathon.webdevstudios.org/admin/teams/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': 'Bear ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTRiZjAwNGRjNzBlMDAxNDUxOTQ0MCIsImlhdCI6MTYxNzg0NTc5MiwiZXhwIjoxNjIzODkzNzkyfQ.3B8NqHQ2S_9n8CsGc8UjvW39BB7HVCa-50BGPtLYHdk',
        },
        body: formBody
    })
}

function createSomeTeam() {
    Teams.forEach(element => {
        const { STT, teamName, emailLeader } = element;
        createTeam({
            emailLeader: emailLeader,
            password: `Hackathon_Team_Pass_${STT}`,
            paid: true,
            teamName: teamName,
            joinTraining: true,
        })
    });
}

window.createSomeTeam = createSomeTeam;