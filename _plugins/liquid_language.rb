require 'liquid'

module Jekyll
  module Language
    
    @@lang = ''
    
    # Supplies translated text
    #
    # Usage: {{ 'author' | t: 'recent_articles' }}
    def t(section, item)
      site = @context.registers[:site]

      if @@lang == ''
        # Access this fewer times by keeping it as a module variable
        @@lang = Jekyll.configuration({})['language']
      end
      
      # Find text in the site language
      @text = site.data['language'][section][item][@@lang]

      if @text == ''
        # Fallback to English text
        @text = site.data['language'][section][item]['en']
      end

      return @text
    end
  end
end

Liquid::Template.register_filter(Jekyll::Language)