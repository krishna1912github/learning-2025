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
        </body>
      </html>
    </div>
  );
}
