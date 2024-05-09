module Jekyll
    module SwedishDates
        MONTHS = {"01" => "januari", "02" => "februari", "03" => "mars",
                "04" => "april", "05" => "maj", "06" => "juni",
                "07" => "juli", "08" => "augusti", "09" => "september",
                "10" => "oktober", "11" => "november", "12" => "december"}

        # http://man7.org/linux/man-pages/man3/strftime.3.html
        def swedishDate(date)
            day = time(date).strftime("%e") # leading zero is replaced by a space
            month = time(date).strftime("%m")
            year = time(date).strftime("%Y")
            day+' '+MONTHS[month]+' '+year
        end

        def html5date(date)
            day = time(date).strftime("%d")
            month = time(date).strftime("%m")
            year = time(date).strftime("%Y")
            year+'-'+month+'-'+day
        end
    end
end

Liquid::Template.register_filter(Jekyll::SwedishDates)