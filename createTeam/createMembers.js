import { listTeams, members, FullTeams, TeamsUpdatePassword } from './listMember.js';

function exportTeamWithId() {
    const newTeam = [];
    members.forEach(mem => {
        let id = listTeams.find(team => (team.teamName === mem.teamName && team.emailLeader === mem.emailLeader))._id;
        newTeam.push({ ...mem, id: id });
    });
    console.log(newTeam[0]);
    console.log(JSON.stringify(newTeam));
}

function addMemberToTeam(mem, id) {
    var formBody = { addMembers: [mem] };
    // for (var property in member) {
    //     var encodedKey = encodeURIComponent(property);
    //     var encodedValue = encodeURIComponent(member[property]);
    //     formBody.push(encodedKey + "=" + encodedValue);
    // }
    // formBody = formBody.join("&");

    fetch('https://api.hackathon.webdevstudios.org/admin/teams/manage/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bear ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTRiZjAwNGRjNzBlMDAxNDUxOTQ0MCIsImlhdCI6MTYxNzg0NTc5MiwiZXhwIjoxNjIzODkzNzkyfQ.3B8NqHQ2S_9n8CsGc8UjvW39BB7HVCa-50BGPtLYHdk',
        },
        body: JSON.stringify(formBody)
    })
}
function changePass(pass, id) {
    var formBody = { password: pass };

    fetch('https://api.hackathon.webdevstudios.org/admin/teams/manage/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bear ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTRiZjAwNGRjNzBlMDAxNDUxOTQ0MCIsImlhdCI6MTYxNzg0NTc5MiwiZXhwIjoxNjIzODkzNzkyfQ.3B8NqHQ2S_9n8CsGc8UjvW39BB7HVCa-50BGPtLYHdk',
        },
        body: JSON.stringify(formBody)
    })
}
function createMember(member) {
    var formBody = [];
    console.log(member);
    for (var property in member) {
        var encodedKey = encodeURIComponent(property);
        var encodedValue = encodeURIComponent(member[property]);
        formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");

    fetch('https://api.hackathon.webdevstudios.org/admin/members/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
            'Authorization': 'Bear ' + 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNTRiZjAwNGRjNzBlMDAxNDUxOTQ0MCIsImlhdCI6MTYxNzg0NTc5MiwiZXhwIjoxNjIzODkzNzkyfQ.3B8NqHQ2S_9n8CsGc8UjvW39BB7HVCa-50BGPtLYHdk',
        },
        body: formBody
    })
}

function createListMember() {
    FullTeams.forEach(team => {
        const {
            emailLeader,
            emailMem2,
            emailMem3,
            emailMem4,
            id,
            msMem1,
            msMem2,
            msMem3,
            msMem4,
            nameMem1,
            nameMem2,
            nameMem3,
            nameMem4,
            schoolMem1,
            schoolMem2,
            schoolMem3,
            schoolMem4,
            sdtMem1,
            sdtMem2,
            sdtMem3,
            sdtMem4,
            teamName,
        } = team;
        if (nameMem1) {

            // createMember({
            //     email: emailLeader,
            //     fullname: nameMem1,
            //     mssv: msMem1,
            //     phoneNumber: sdtMem1 || '0',
            //     school: schoolMem1,
            // });
            addMemberToTeam({
                email: emailLeader,
                mssv: msMem1,
            }, id)
        }
        if (nameMem2) {
            // createMember({
            //     email: emailMem2,
            //     fullname: nameMem2,
            //     mssv: msMem2,
            //     phoneNumber: sdtMem2 || '0',
            //     school: schoolMem2,
            // });
            addMemberToTeam({
                email: emailMem2,
                mssv: msMem2,
            }, id)
        }
        if (nameMem3) {
            // createMember({
            //     email: emailMem3,
            //     fullname: nameMem3,
            //     mssv: msMem3,
            //     phoneNumber: sdtMem3 || '0',
            //     school: schoolMem3,
            // });
            addMemberToTeam({
                email: emailMem3,
                mssv: msMem3,
            }, id)
        }
        if (nameMem4) {
            // createMember({
            //     email: emailMem4,
            //     fullname: nameMem4,
            //     mssv: msMem4,
            //     phoneNumber: sdtMem4 || '0',
            //     school: schoolMem4,
            // });
            addMemberToTeam({
                email: emailMem4,
                mssv: msMem4,
            }, id)
        }
    })
}

let email = [];
let password = [];

// function updatePassword() {
//     TeamsUpdatePassword.forEach((team, index) => {
//         let d = index + 1;
//         if (index + 1 < 10) d = "0" + (index + 1);
//         let pass = `Hackathon_Team_Pass_${d}`;
//         email.push(team.emailLeader);
//         password.push(pass);
//         console.log(team.emailLeader, pass);
//         // changePass(pass, team.id);
//     })

//     let email_res = "";
//     let pass_res = "";
//     for (let i = 0; i < email.length; i++) {
//         email_res = email_res + email[i] + "\n";
//         pass_res = pass_res + password[i] + "\n";
//     }

//     document.getElementById("email_output").value = email_res;
//     document.getElementById("password_output").value = pass_res;
// }



function updatePassword() {

    let email = [];
    let password = [];
    TeamsUpdatePassword.forEach((team, index) => {
        let d = index + 1;
        if (index + 1 < 10) d = "0" + (index + 1);
        // let pass = `Hackathon_Team_Pass_${d}`;
        let shortid = Math.random().toString(36).substr(2, 10).toUpperCase();
        let pass = "HACKATHON_" + shortid;
        email.push(team.emailLeader);
        password.push(pass);
        changePass(pass, team.id);
    })
    console.log(email);
    console.log(password)

    let email_res = "";
    let pass_res = "";

    for (let i = 0; i < email.length; i++) {
        email_res = email_res + email[i] + "\n";
        pass_res = pass_res + password[i] + "\n";
    }

    document.getElementById("email_output").value = email_res;
    document.getElementById("password_output").value = pass_res;
}

window.exportTeamWithId = exportTeamWithId;
window.createListMember = createListMember;
window.updatePassword = updatePassword;