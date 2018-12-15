import React from 'react';
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import {TableBody, TableRow} from "@material-ui/core";
import TableCell from "@material-ui/core/TableCell";
import {connect} from "react-redux";
import {fetchAllPolls} from "./ViewAllPollsActions";
import './viewAllPolls.scss';
import {Link} from "react-router-dom";

const tableMetaData = [
  {id: 'poll_question', headerName: 'Poll Question'},
  {id: 'total_votes', headerName: 'Total Votes'},
];

export class ViewAllPolls extends React.Component   {
  componentDidMount() {
    this.props.dispatchFetchAllPolls();
  }
  
  render()  {
    const {polls} = this.props.viewAllPolls;
    return (<div className={"view-all-polls-container"}>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {
                tableMetaData.map( header => (
                  <TableCell id={header.id}>{header.headerName}</TableCell>
                ))
              }
            </TableRow>
          </TableHead>
          <TableBody>
            {
              polls.map((poll) => (<TableRow>
                <TableCell><Link to={'/view_poll/' + poll.id}>{ poll.question}</Link></TableCell>
                <TableCell>{ poll.totalVotes}</TableCell>
              </TableRow>))
            }
          </TableBody>
        </Table>
      </Paper>
    </div>)
  }
}


export const mapStateToProps = (state) => ({
  viewAllPolls: state.viewAllPolls,
});

export const mapDispatchToProps = (dispatch) => ({
  dispatchFetchAllPolls: () => dispatch(fetchAllPolls()),
});


export default connect(mapStateToProps, mapDispatchToProps)(ViewAllPolls);


