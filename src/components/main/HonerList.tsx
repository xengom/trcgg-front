import * as React from 'react'
import Box from '@mui/material/Box'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import {FixedSizeList, ListChildComponentProps} from 'react-window'

function getHonorList() {
  // TODO: API를 통해 우승 팀 입력 받아 던지기
  let testData = [
    {id: 1, team: `소띠형들의 피지컬!`},
    {id: 2, team: `너굴이 매운맛!`},
    {id: 3, team: `오쫄이마쎄우승시킴`},
    {id: 4, team: `일밍도현팀공동우승`},
    {id: 5, team: `쓰레기유나 젤못된년`},
    {id: 6, team: `피지컬 찍누 !`},
    {id: 7, team: `요트 캐뤼'.<`},
    {id: 8, team: `그네가 우승을?`},
    {id: 9, team: `1티어클랜은 난민`},
    {id: 10, team: `그네 진짜 우승 !`}
  ]
  const honorList = testData
    .sort((a, b) => b.id - a.id)
    .map(m => {
      return {id: m.id.toString().padStart(2, '0'), team: m.team}
    })
  return honorList
}

function renderRow(props: ListChildComponentProps) {
  const {index, style} = props
  return (
    <ListItem style={style} key={index} component="div" disablePadding>
      <ListItemButton>
        <ListItemText
          primary={`${getHonorList()[index].id}" ${getHonorList()[index].team}`}
        />
      </ListItemButton>
    </ListItem>
  )
}

export default function VirtualizedList() {
  return (
    <>
      <Box sx={{width: '100%', height: 400, maxWidth: 400, bgcolor: '#282934'}}>
        <FixedSizeList
          height={400}
          width={360}
          itemSize={50}
          itemCount={getHonorList().length}
          overscanCount={10}>
          {renderRow}
        </FixedSizeList>
      </Box>
    </>
  )
}
