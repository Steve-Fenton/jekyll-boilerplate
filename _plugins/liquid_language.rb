require 'liquid'

module Jekyll
  module Language
    
    @@lang = nil
    
    # Supplies translated text
    #
    # Usage: {{ 'author' | t: 'recent_articles' }}
    def t(section, item)
      site = @context.registers[:site]

      if @@lang == nil
        # Access this fewer times by keeping it as a module variable
        @@lang = Jekyll.configuration({})['language']
      end
      
      # Find text in the site language (for example 'fr-be')
      text = site.data['language'][section][item][@@lang]

      # Fall back to a more general version of the language (for example 'fr')
      if text == nil and @@lang.include? '-'
        fallback_lang = @@lang.split('-')[0];
        text = site.data['language'][section][item][fallback_lang]
      end

      if text == nil
        # Fallback to English text
        text = site.data['language'][section][item]['en']
      end

      return text
    end
  end
end

Liquid::Template.register_filter(Jekyll::Language)