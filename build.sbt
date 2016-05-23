name := "drog"

scalaVersion := "2.11.8"

ghpages.settings

git.remoteRepo := "git@github.com:adrobisch/blog.git"
// Define two `Configuration` instances.
val main = config(".")

AsciidoctorPlugin.asciidoctorSettings(main)

val articles = config("articles")

AsciidoctorPlugin.asciidoctorSettings(articles)

sourceDirectory in articles := sourceDirectory.value / "asciidoctor" / "articles"

siteSubdirName in articles := "articles"
