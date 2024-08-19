package com.example.reactboard.controller;

import com.example.reactboard.db.BoardMapper;
import com.example.reactboard.dto.BoardSaveDto;
import com.example.reactboard.entity.BoardEntity;
import com.example.reactboard.service.BoardService;
import com.example.reactboard.util.Header;
import com.example.reactboard.util.Search;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RestController
public class BoardController {
//    private final BoardMapper boardMapper;
    private final BoardService boardService;

    @GetMapping("/board")
    Header<List<BoardEntity>> getBoardList(@RequestParam(defaultValue = "0") int page, @RequestParam(defaultValue = "10") int size, Search search){
        return boardService.getBoardList(page, size, search);
    }

    @GetMapping("/board/{idx}")
    Header<BoardEntity> getBoardOne(@PathVariable Long idx){
        return boardService.getBoardOne(idx);
    }

    @PostMapping("/board")
    Header<BoardEntity> createBoard(@RequestBody BoardSaveDto boardSaveDto){
        return boardService.insertBoard(boardSaveDto);
    }

    @PatchMapping("/board")
    Header<BoardEntity> updateBoard(@RequestBody BoardSaveDto boardSaveDto){
        return boardService.updateBoard(boardSaveDto);
    }

    @DeleteMapping("/board/{idx}")
    Header<String> deleteBoard(@PathVariable Long idx){
        return boardService.deleteBoard(idx);
    }
}
