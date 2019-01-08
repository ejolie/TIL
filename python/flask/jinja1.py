from jinja2 import Template
template = Template('Hello {{ name }}!')
template.render(name='John Doe')