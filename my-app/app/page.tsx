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
              <td>Name</td>
            </tr>
          </table>
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" name="name"></input>
            <select name="gender">
              <option selected={true} value="male">
                male
              </option>
              <option  selected={true} value="female">
                female
              </option>
              <input checked="checked" name="newsletter" type="radio" value="daily" /> Daily <input name="newsletter" type="radio" value="weekly" /> Weekly<br />
  <textarea cols="20" name="comments" rows="5">Comment</textarea><br />
  <label><input name="terms" type="checkbox" value="tandc" />Accept terms</label> <br />
<input type="submit" value="Submit" />
            </select>
          </form>

        </body>
      </html>
    </div>
  );
}
