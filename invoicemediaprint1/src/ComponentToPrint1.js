// component to be printed
export default function ComponentToPrint1 (el){
      return (
        <>
        <div>
          <h2 style={{ color: "green" }}>Attendance</h2>
          <table>
            <thead>
              <th>S/N</th>
              <th>Name</th>
              <th>Email</th>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Njoku Samson</td>
                <td>samson@yahoo.com</td>
              </tr>
              <tr>
                <td>2</td>
                <td>Ebere Plenty</td>
                <td>ebere@gmail.com</td>
              </tr>
              <tr>
                <td>3</td>
                <td>Undefined</td>
                <td>No Email</td>
              </tr>
            </tbody>
          </table>
        </div>
        </>
      );
    }
  