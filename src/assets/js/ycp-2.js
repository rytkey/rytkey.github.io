/******************************************************
 * #### jQuery-Youtube-Channels-Playlist ####
 * Coded by Ican Bachors 2014.
 * http://ibacor.com/labs/jquery-youtube-channels-playlist/
 * Updates will be posted to this site.
 ******************************************************/
 var ibacor_ycp = function(m, o, q, n, p) {
    $.ajax({
        url: 'https://www.googleapis.com/youtube/v3/channels?part=contentDetails&' + o + '=' + m + '&key=' + p,
        crossDomain: true,
        dataType: 'json'
    }).done(function(a) {
        var b = a.items[0].contentDetails.relatedPlaylists.uploads,
            chid = a.items[0].id,
            nekpag = '',
            autop = 0;
        if (n) {
            autop = 1
        }
        youtube_video_list(b, p, q, nekpag, chid, m, autop)
    });

    function youtube_video_list(f, g, m, h, k, l, j) {
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=' + m + '&playlistId=' + f + '&key=' + g + '&pageToken=' + h,
            dataType: 'json'
        }).done(function(c) {
            var d = '';
            d += '<div class="ibacordotcom-vid-top text-right">';
            d += '<span class="tombol ibacordotcom_vid_prev" title="Previous videos">Previous</span> ';
            d += '<span class="tombol ibacordotcom_vid_next" title="Next videos">Next</span></div><div class="ibacordotcom-vid-bottom">';
            $.each(c.items, function(i, a) {
                var b = c.items[i].snippet.resourceId.videoId;
                getwaktu(b, i, g);
                d += '<div class="ibacordotcom-play" data-vvv="' + b + '"><div class="ibacordotcom_youtube_thumb"><img src="' + c.items[i].snippet.thumbnails.default.url + '" alt="ibacor"><span class="ibacordotcom-vid-tm' + i + '"></span></div>';
                d += c.items[i].snippet.title + '</div>'
            });
            d += '</div>';
            $('.ibacordotcom_youtube_channels').html(d);
            if (c.prevPageToken == null) {
                var e = $(".ibacordotcom-play").attr("data-vvv");
                youtube_det(e, k, l, g, j)
            }
            if (c.prevPageToken != null) {
                $('.ibacordotcom_vid_prev').click(function() {
                    var a = c.prevPageToken;
                    youtube_video_list(f, g, m, a, k, l, j);
                    return false
                })
            }
            $('.ibacordotcom_vid_next').click(function() {
                var a = c.nextPageToken;
                youtube_video_list(f, g, m, a, k, l, j);
                return false
            });
            $(".ibacordotcom-play").each(function() {
                $(this).click(function() {
                    var a = $(this).attr("data-vvv");
                    $('div').removeClass('ibacordotcom-vid-active');
                    $(this).addClass('ibacordotcom-vid-active');
                    youtube_det(a, k, l, g, j);
                    return false
                })
            })
        })
    }

    function youtube_det(c, d, e, g, f) {
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/videos?id=' + c + '&key=' + g + '&part=snippet,statistics',
            dataType: 'json'
        }).done(function(a) {
            var b = '',
                viewc = a.items[0].statistics.viewCount,
                likc = a.items[0].statistics.likeCount,
                likd = a.items[0].statistics.dislikeCount,
                category = '',
                judul = a.items[0].snippet.localized.title,
                desc = a.items[0].snippet.localized.description;
            b += '<iframe src="http://www.youtube.com/embed/' + c + '?rel=0&amp;autoplay=' + 0 + '" allowfullscreen="" frameborder="0" class="ibacordotcom-vid-iframe"></iframe>';
            $('.ibacordotcom_vid_play').html(b)
        })
    }

    function getwaktu(c, i, g) {
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/videos?id=' + c + '&key=' + g + '&part=contentDetails',
            dataType: 'json'
        }).done(function(a) {
            var b = a.items[0].contentDetails.duration,
                dataw = '',
                menit = '',
                detik = '';
            if (b.match(/M/g)) {
                dataw = b.split('M');
                menit = dataw[0].replace('PT', '');
                if (dataw[1] != '') {
                    detik = dataw[1].replace('S', '')
                } else {
                    detik = '00'
                }
            } else {
                dataw = b.split('PT');
                menit = '00';
                detik = dataw[1].replace('S', '')
            }
            $('.ibacordotcom-vid-tm' + i).html(menit + ':' + detik)
        })
    }
}