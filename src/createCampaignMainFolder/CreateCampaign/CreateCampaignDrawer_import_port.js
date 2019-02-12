import React from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { withStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Vouchertype from '../../Vouchertype/VoucherTypes';
import Createcampaignvoucategory from './createvoucher_cardCategory';
import Form from '../../sectionform/section_a_form';
import Inputform2 from "../../sectionform/section_b_form2";
import DiscountForm from "../../sectionform/section_c_form";
import {keycloak} from '../../keycloak-config';
//import action creators
import {openPanel2,openBulk,openCategory,TooglePanel0,TooglePanel1} from '../../store/actionCreator';
import {Generatevoucher} from '../../Async_Reg_reduxthunk/Thunk/voucherThunk';
import { creationvalidation, expirationvalidation ,ValidateCodeLength } from '../../Validation/Validation';
import Failurechip from "../../Chip/Failurechip";

const styles = theme => ({
  root: {
    width: "100%",
    margin: "10px auto",
    flexGrow: 1,
  },
  
  container: {
    width: "100%",
    margin: "0px auto",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: "33.33%",
    flexShrink: 0
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    width: "90%",
    margin: "0px auto",
    borderRadius: 0,
    boxShadow: "none",
    border: ".5px solid #eee",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary
  }
});

class CreateCampaignDrawer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      expanded: '',
      amount: null,
      characterset: null,
      codespec:null,
      showPassword: false,
      expirydate: null,
      creationDate: new Date().toISOString().slice(0,10),
      number:null,
      percentage:null,
      discountType:null,
      DiscountPercent:0,
      DiscountUnit:0,
      pattern: null,
      length:null,
      TypeNumber: 1,
      characterset:null,
      codespec:null,
      prefix:null,
      suffix:null,
      vouchertype:null,
      merchantId: keycloak.idTokenParsed.sub,
      multiline:null,
      MetaData:"",
      singleDefaultvalue:1,
      patternVisbility:true,
      lengthVisibility:true,
      codespecVisibility:false,
      Separator:"-",
      Ammountvisibility:true,
      Unitvisibility:true,
      Percentagevisibility:true,

      //validation visibility message state
      Pattern_message:false,
      Length_message:false,
      Prefix_message:false,
      Suffix_message:false,
      expirydate_message:false,
      multiline_message:false,
      TypeNumber_message:false,
      amount_message:false,
      characterset_message:false,
      codespec_message:false,
      DiscountPercent_message:false,
      DiscountUnit_message:false,
      GiftAmount_message:false,
      DiscountAmount_message:false,
      valueAmount:false

    };
    this.handleChangeFormA = this.handleChangeFormA.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  handleChangeFormA = (prop, event) => {
    this.setState({ [prop]: event.target.value });
    if(event.target.value === 'Length'){
      this.setState({
        patternVisbility:true, 
        lengthVisibility:false
      })
    }
    if(event.target.value === 'Pattern'){
      this.setState({
        patternVisbility:false,
        lengthVisibility:true
      })
    };
  };

  onChangeHandler = (event) => {
    //section0
      if(event.target.name === 'prefix'){
          this.setState({Prefix_message:false})
      }
      if(event.target.name === 'suffix'){
          this.setState({Suffix_message:false})
      }
      if(event.target.name === 'length'){
        this.setState({Length_message:false})
      }
      if(event.target.name === 'TypeNumber'){
        this.setState({TypeNumber_message:false})
      }
      if(event.target.name === 'multiline'){
        this.setState({multiline_message:false})
      }

      //section1
      if(event.target.name === 'pattern'){
        this.setState({pattern_message:false})
      }
      if(event.target.name === 'characterset'){
        this.setState({characterset_message:false})
      }
      if(event.target.name === 'codespec'){
        this.setState({codespec_message:false})
      }
      //section2
      if(event.target.name === 'DiscountPercent'){
        this.setState({DiscountPercent_message:false})
      }
      if(event.target.name === 'DiscountUnit'){
        this.setState({DiscountUnit_message:false})
      }
      if(event.target.name === 'amount'){
        this.setState({GiftAmount_message:false,DiscountAmount_message:false,valueAmount:false})
      }
      if(event.target.name === 'MetaData'){
        this.setState({MetaData_message:false})
      }

    this.setState({
      [event.target.name]: event.target.value
    });

    if(event.target.value === 'Percentage'){
      this.setState({
        Ammountvisibility:true, 
        Unitvisibility:true,
        Percentagevisibility:false,
      })
    }
    if(event.target.value === 'Unit'){
      this.setState({
        Percentagevisibility:true,
        Ammountvisibility:true,
        Unitvisibility:false,
      })
    };
    if(event.target.value === 'Amount'){
      this.setState({
        Unitvisibility:true,
        Percentagevisibility:true,
        Ammountvisibility:false,
      })
    };
  };

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  createVoucher = () => {
    const formType = this.props.formType
    let  obj = {
      //     "VoucherType":"Gift",
      VoucherType:formType,
      //   "CharacterSet":"AlphabetNumeric",
      CharacterSet: this.state.characterset,
      codespec:this.state.codespec,
      //   "CodePattern":null,
      CodePattern:this.state.pattern,
      //   "CodeLength":10,
      CodeLength:Number(this.state.length),
      //   "Prefix":"REKZ",
      Prefix:this.state.prefix,
      //   "Suffix":"BIX",
      Suffix:this.state.suffix,
       //   "DiscountPercent":0,
       DiscountPercent:this.state.DiscountPercent,
       //   "DiscountUnit":0,
       DiscountUnit:this.state.DiscountUnit,
      //   "NumbersOfVoucherToCreate":200,
      NumbersOfVoucherToCreate:Number(this.state.TypeNumber),
      //  "MerchantId":"1234567840"
      MerchantId:this.state.merchantId,
      //   "CreationDate":"2007-05-08 12:35:00",
      CreationDate:this.state.creationDate,
      //   "Seperator":null,
      Separator:this.state.Separator,
      //   "ExpiryDate":"2019-05-08 12:35:00",
      ExpiryDate:this.state.expirydate,
      //   "MetaData":" ",
      MetaData:this.state.MetaData,
      //   "Description":"This is the description",
      Description:this.state.multiline,
    }
    //   "ValueAmount":0,
    //   "DiscountAmount":0,
    //   "GiftAmount":9000,
    obj[`${formType}Amount`] = Number(this.state.amount)
    //call the redux-thunk to dispatch creationofvoucher
    if(creationvalidation(obj))
          this.setState({CreationDate_message:true})
    if(expirationvalidation(obj))
          this.setState({ExpiryDate_message:true})
    if(ValidateCodeLength(obj))
          this.setState({Length_message:true})
    else{
      this.props.createVoucher(obj)
    }
    
  }
  
  render() {
  const {classes,panel0, panel1, panel2, formType, openPanel2,openCategory,voucherType,} = this.props;
    return (
      <div className={classes.root}>
        <ExpansionPanel
          expanded={panel0}
          onChange={this.props.TooglePanel0}
        >
          <Createcampaignvoucategory  onClick={openCategory}/>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} />
          <ExpansionPanelDetails />
        </ExpansionPanel>

        <ExpansionPanel
          expanded={panel1}
          onChange={this.props.TooglePanel1}
        >
        <Vouchertype onClick={openPanel2}/>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon/>} />
          <ExpansionPanelDetails />
        </ExpansionPanel>
      
        <ExpansionPanel
          expanded={panel2}
          onChange={this.handleChange("panel2")}
        >
          <div className={classes.root}>
            <Grid container spacing={6}>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Paper className={classes.paper}>
                  <Form
                     handleDateChange={this.handleDateChange} 
                     handleChangeFormA={this.handleChangeFormA}
                     changeHandler = {this.onChangeHandler}
                     {...this.state}/>
                </Paper>
              </Grid>
              <Grid item  xs={12} sm={12} md={12}>
              <span><Failurechip/></span>
                <Paper className={classes.paper}>
                 {formType === 'Gift' && 
                 <Inputform2 
                    handleDateChange={this.handleDateChange} 
                    handleChangeFormA={this.handleChangeFormA}
                    onChangeHandler = {this.onChangeHandler}
                    voucherTypeProp={voucherType}
                    createVoucherfunction={this.createVoucher}
                    {...this.state}/>}
                 {formType === 'Value' && 
                 <Inputform2 
                    handleDateChange={this.handleDateChange} 
                    handleChangeFormA={this.handleChangeFormA}
                    onChangeHandler = {this.onChangeHandler}
                    voucherTypeProp={voucherType}
                    createVoucherfunction={this.createVoucher}
                    {...this.state}/>}
                 {formType === 'Discount' && 
                 <DiscountForm 
                    handleDateChange={this.handleDateChange} 
                    handleChangeFormA={this.handleChangeFormA}
                    onChangeHandler = {this.onChangeHandler}
                    voucherTypeProp={voucherType}
                    formType = {this.props.formType}
                    createVoucherfunction={this.createVoucher}
                    {...this.state}/>} 
                </Paper>
              </Grid>
            </Grid>
          </div>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} />
          <ExpansionPanelDetails />
        </ExpansionPanel>
      </div>
    );
  }
}

CreateCampaignDrawer.propTypes = {
  classes: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  return {
    panel0: state.mobRed.panel0Visibility,
    panel1: state.mobRed.panel1Visibility,
    panel2: state.mobRed.panel2Visibility,
    formType: state.mobRed.formType,
    responsemessage:state.voucher.vouchers,
    voucherType:state.mobRed.voucherType

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    openPanel2: (payload) => dispatch(openPanel2(payload)),
    openBulk: (payload) => dispatch(openBulk(payload)),
    openCategory:(payload) => dispatch(openCategory(payload)),
    TooglePanel0: () => dispatch(TooglePanel0()),
    TooglePanel1: () => dispatch (TooglePanel1()),
    createVoucher: (payload) => dispatch(Generatevoucher(payload)),
  }
} 
export default withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(CreateCampaignDrawer));