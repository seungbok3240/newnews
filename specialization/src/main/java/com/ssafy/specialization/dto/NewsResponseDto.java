package com.ssafy.specialization.dto;

import com.ssafy.specialization.entity.enums.Press;
import lombok.Builder;
import lombok.Getter;

import java.time.LocalDateTime;
import java.util.List;

@Getter
public class NewsResponseDto {

    private Long id;
    private String title;
    private String content;
    private LocalDateTime newsDate;
    private String reporter;
    private Press press;
    private List<NewsImageResponseDto> newsImageList;

    @Builder
    public NewsResponseDto(
            Long id,
            String title,
            String content,
            LocalDateTime newsDate,
            String reporter,
            Press press,
            List<NewsImageResponseDto> newsImageList
    ) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.newsDate = newsDate;
        this.reporter = reporter;
        this.press = press;
        this.newsImageList = newsImageList;
    }
}
