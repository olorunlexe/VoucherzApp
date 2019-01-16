import React from 'react';
import {configure,shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import axios from 'axios';

import CreateCampaignCard_1 from '../CreateCampaign/CreateCampaignCard_1';
import CreateCampaignDrawer_import_port from '../CreateCampaign/CreateCampaignDrawer_import_port';
jest.mock('axios');


configure({adapter:new Adapter()});

describe('<CreateCampaignDrawer_import_port/>',()=>{
        let wrapper;
        beforeEach(()=>{
          wrapper = shallow(<CreateCampaignDrawer_import_port/>
        )})
        it('check if  the <CreateCampaignCard_1/> is rendered as component Mounts',()=>{
            expect(wrapper.find(CreateCampaignCard_1));
        })

        test('should fetch users', () => {
        const wrapper_2 = shallow(<CreateCampaignDrawer_import_port />);
        const instance = wrapper_2.instance();
        instance.handleFetchingDrawerContents();
        const resp = {data: [
            {
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false}]};
            axios.get.mockResolvedValue(resp);

        // or you could use the following depending on your use case:
        // axios.get.mockImplementation(() => Promise.resolve(resp))

        return CreateCampaignDrawer_import_port.handleFetchingDrawerContents().then(users => expect(users).toEqual(resp.data));
        });
})