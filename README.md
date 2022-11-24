## WEB SERVER SCRAPER
This server scrapes websites and generate an image and pdf from the site.
### SETUP
To setup and run the server,
- pull the code from the repository
- Run `yarn` or `npm install`
- Run `yarn dev` or `npm run dev` to spin up the server.
### ENDPOINTS
<table>
  <th> Endpoints </th>
  <th> Parameters </th>
  <th> Description </th>

  <tr>
    <td> <code>/scrape</code> </td>
    <td>
      <code>url</code> - e.g 'https://google.com' </li>
    </td>
    <td>
      This endpoints scrapes a website and returns a keys<br><br>
      SUCCESS RESPONSE:
      <pre>
{
  "error": false,
  "data": {
    "keys": [
      "1669272487205-file.pdf",
      "1669272487205-file.png"
    ]
  }
}
      </pre>
    </td>
  </tr>

  <tr>
    <td> <code>/d/:file</code> </td>
    <td>
      <code>file</code> - e.g '1669272487205-file.pdf' </li>
    </td>
    <td>
      This endpoints scrapes a website and returns a keys<br><br>
      SUCCESS RESPONSE: file
    </td>
  </tr>
</table>
