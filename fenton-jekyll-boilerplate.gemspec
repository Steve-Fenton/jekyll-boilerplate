Gem::Specification.new do |spec|
    spec.name          = "fenton-jekyll-boilerplate"
    spec.version       = "0.0.15"
    spec.authors       = ["Steve Fenton"]
    spec.email         = ["rubygems@stevefenton.co.uk"]
   
    spec.summary       = %q{A lightweight all in one theme for Jekyll.}
    spec.description   = "A lightweight all in one theme for Jekyll"
    spec.homepage      = "https://jekyll.stevefenton.co.uk/"
    spec.license       = "Apache-2.0"
   
    spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets\/css|assets\/icons|assets\/js|assets\/search|assets\/sitemap|_data|_layouts|_includes|LICENSE|README.md)}i) }
   
    spec.add_development_dependency "jekyll", "~> 3.3"
    spec.add_development_dependency "bundler", "~> 1.12"
  end