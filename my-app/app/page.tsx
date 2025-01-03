import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <html>
        <head>
          <title>Title of the document</title>
        </head>

        <body>
          <a href="https://www.w3schools.com">this a link </a>
          <abbr title="World Health Organization">WHO</abbr>
          <button>Click me</button>
          <strong>Bold text</strong>
          <em>Italic text</em>
          <q>Success is a journey, not a destination.</q>
          <ul>
            <li>coofee</li>
            <li>tea</li>
            <li>coke</li>
          </ul>
          <ol>
            <li>coofee</li>
            <li>tea</li>
            <li>coke</li>
          </ol>
          <table>
            <tr>
              <th>Name</th>
              <th>Age</th>
            </tr>
            <tr>
              <td>Name</td>
              <td>Name</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Name</td>
            </tr>
          </table>
          <form>
            <label for="name">Name:</label>
            <input type="text" name="name"></input>
            <select name="gender">
              <option selected={true} value="male">
                male
              </option>
              <option selected={true} value="female">
                female
              </option>
            </select>
          </form>

        </body>
      </html>
    </div>
  );
}
