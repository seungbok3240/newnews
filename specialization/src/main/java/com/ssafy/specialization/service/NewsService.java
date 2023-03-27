package com.ssafy.specialization.service;

import com.ssafy.specialization.dto.NewsImageResponseDto;
import com.ssafy.specialization.dto.NewsResponseDto;
import com.ssafy.specialization.entity.News;
import com.ssafy.specialization.entity.NewsImage;
import com.ssafy.specialization.repository.NewsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class NewsService {

    private final NewsRepository newsRepository;

    public NewsResponseDto getNews(Long newsId) {
        News news = newsRepository.findById(newsId).orElseThrow(
                () -> new IllegalArgumentException("해당하는 뉴스가 없습니다.")
        );

        return NewsResponseDto.builder()
                .id(news.getId())
                .title(news.getTitle())
                .content(news.getContent())
                .press(news.getPress().toString())
                .reporter(news.getReporter())
                .category(news.getCategory().toString())
                .newsDate(news.getNewsDate())
                .newsImageList(
                        getNewsImageResponseDto(news.getNewsImageList())
                )
                .build();
    }

    private List<NewsImageResponseDto> getNewsImageResponseDto(List<NewsImage> newsImageList) {
        return newsImageList.stream().map(
                (newsImage) -> NewsImageResponseDto.builder()
                        .url(newsImage.getUrl())
                        .description(newsImage.getDescription())
                        .build()
        ).collect(Collectors.toList());
    }
}
