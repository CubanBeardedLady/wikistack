const html = require("html-template-tag");
const layout = require("./layout");

module.exports = () => layout(html`
  <h3>Add a Page</h3>
  <hr>
  <form method="POST" action="/wiki/">

    <div>	<label for="author_name">Author's Name:</label><input name="author_name" id="author_name" type="text"></div>

    <div>	<label for="author_email">Author of Email:</label><input name="author_email" id="author_email" type="email"></div>

    <div class="form-group">
      <label for="title" class="col-sm-2 control-label">Page Title</label>
      <div class="col-sm-10">
        <input id="title" name="title" type="text" class="form-control"/>
      </div>
    </div>

    <div>	<label for="content">Content:</label><textarea name="content" id="content">Enter text here...</textarea></div>

    <div>	<label for="status">Select Status:</label>
    <select id="status" name="status">
      <option value="open">Open</option>
      <option value="closed">Closed</option>
    </select></div>

    <div class="col-sm-offset-2 col-sm-10">
      <button type="submit" class="btn btn-primary">submit</button>
    </div>

  </form>
`);
