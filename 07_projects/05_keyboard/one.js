const insert = document.getElementById('insert')

window.addEventListener('keydown',(e) => {

    // for space " " ? If the condition is true,
    insert.innerHTML = `
    <table>
    <tr>
      <th>Key</th>
      <th>KeyCode</th>
      <th>Code</th>
    </tr>
    <tr> 
      <td>${e.key === ' ' ? 'Space' : e.key }</td> 
      <td>${e.keyCode}</td>
      <td>${e.code}</td>
      
    </tr>

</table>

    
    `
})