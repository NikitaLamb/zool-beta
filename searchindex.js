// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("index.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("page1.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("blog.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("music.html", "Untitled Page", " ", "");
   return this;
}
