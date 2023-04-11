// UC 4 – Display Employee Details in Tabular Format using Template Literals
// window.addEventListener('DOMContentLoaded', (event) => {
//     createInnerHtml();
// });

// // Template literal ES6 feature.
// const createInnerHtml = () => {
//     const headerHtml = "<th></th><th>Name</th><th>Gender</th><th>Department</th>" +
//                         "<th>Salary</th><th>Start Date</th><th>Actions</th>"
//     const innerHtml = `${headerHtml}
//     <tr>
//         <td><img class="profile" src="../Assets/profile-images/Ellipse -2.png" alt=""></td>
//         <td>Kundan Kumar</td>
//         <td>Male</td>
//         <td><div class="dept-label">Finance</div>
//             <div class="dept-label">Engineer</div></td>
//         <td>400000</td>
//         <td>1 May 2021</td>
//         <td>
//             <img id="1" onclick="remove(this)" src="../Assets/icons/delete.png" alt="delete">
//             <img id="1" onclick="update(this)" src="../Assets/icons/edit.png" alt="update" width="25">
//         </td>
//     </tr>
//     `;
//     document.querySelector('#table-display').innerHTML = innerHtml;
// }

// UC 5 – Display Employee Details from JSON Object
let empPayrollList;
window.addEventListener('DOMContentLoaded', (event) => {
    empPayrollList = getEmployeePayrollDataFromStorage();
    document.querySelector(".emp-count").textContent = empPayrollList.length;
    createInnerHtml();
});

const getEmployeePayrollDataFromStorage = () => {
    return localStorage.getItem('EmployeePayrollList') ?
                        JSON.parse(localStorage.getItem('EmployeePayrollList')) : [];
}

// Template literal ES6 feature.
const createInnerHtml = () => {
    if (empPayrollList.length == 0) return;
    const headerHtml = "<tr><th></th><th>Name</th><th>Gender</th><th>Department</th>" +
                        "<th>Salary</th><th>Start Date</th><th>Actions</th></tr>"
    let innerHtml = `${headerHtml}`;
    for (const empPayrollData of empPayrollList) {
         innerHtml = `${innerHtml}
        <tr>
            <td><img class="profile" src="${empPayrollData._profilePic}" alt=""></td>
            <td>${empPayrollData._name}</td>
            <td>${empPayrollData._gender}</td>
            <td>${getDeptHtml(empPayrollData._department)}</td>
            <td>${empPayrollData._salary}</td>
            <td>${empPayrollData._startDate}</td>
            <td>
                <img id="${empPayrollData._id}" onclick="remove(this)" src="../Assets/icons/delete.png" alt="delete">
                <img id="${empPayrollData._id}" onclick="update(this)" src="../Assets/icons/edit.png" alt="update" width="25">
            </td>
        </tr>
        `;
    }
    document.querySelector('#table-display').innerHTML = innerHtml;
}

// const createEmployeePayrollJSON = () => {
//     let empPayrollListLocal = [
//         {
//             _name: 'Kundan Kumar',
//             _gender: "male",
//             _department: [
//                 'Engineering',
//                 'Finance'
//             ],
//             _salary: '500000',
//             _startDate: '25 Dec 2021',
//             _note: '',
//             _profilePic: '../Assets/profile-images/Ellipse -2.png'
//         },
//         {
//             _name: 'Priya',
//             _gender: "Female",
//             _department: [
//                 'Hr',
//                 'Finance'
//             ],
//             _salary: '400000',
//             _startDate: '20 jan 2020',
//             _note: '',
//             _profilePic: '../Assets/profile-images/Ellipse -1.png'
//         }
//     ];
//     return empPayrollListLocal;
// }

const getDeptHtml = (deptList) => {
    let deptHtml = '';
    for (const dept of deptList) {
        deptHtml = `${deptHtml} <div class="dept-label">${dept}</div>`
    }
    return deptHtml;
}