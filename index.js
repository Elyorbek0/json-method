let inp = document.querySelectorAll('.form-control')
let btn = document.querySelector('.btn')

btn.onclick = () => {
  let inputValueOne = inp[0].value
  let inputValueTwo = inp[1].value
  let obj = { name: inputValueOne, lastname: inputValueTwo }

  fetch('https://for-backend-goldweb-production.up.railway.app/data', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(obj)
  }).then(res => {
    res.status === 201 ? alert('Bobur mezza') : alert('xato')
    inp[0].value = ''
    inp[1].value = ''
  })
}


let tbody = document.querySelector('tbody')
fetch('https://for-backend-goldweb-production.up.railway.app/data')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        data.forEach((elem, index) => {
            tbody.innerHTML += `
                <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${elem.firstName}</td>
                    <td>${elem.lastName}</td>
                    <td class="td-f">
                        <button class="btn btn-primary" onclick="deletetext(${elem.id})">Delete</button>
                    </td>
                </tr>
            `
        })
    })
function deletetext(index) {
    fetch(`https://for-backend-goldweb-production.up.railway.app/data/${index}`, {
        method: 'DELETE',
    }).then((res) => {
        alert(res.statusText)
    });
}


  