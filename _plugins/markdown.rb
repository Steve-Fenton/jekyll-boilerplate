Jekyll::Hooks.register :posts, :post_init do |item|
    item.content = item.content
        &.gsub(/^:::([a-z \-_]+)/, '<div class="\1" markdown="1">')
        &.gsub(/^:::/, '</div>')
end

Jekyll::Hooks.register :pages, :post_init do |item|
    item.content = item.content
        &.gsub(/^:::([a-z \-_]+)/, '<div class="\1" markdown="1">')
        &.gsub(/^:::/, '</div>')
end

Jekyll::Hooks.register :documents, :post_init do |item|
    item.content = item.content
        &.gsub(/^:::([a-z \-_]+)/, '<div class="\1" markdown="1">')
        &.gsub(/^:::/, '</div>')
end