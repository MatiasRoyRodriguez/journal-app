import { TurnedInNot } from "@mui/icons-material"
import { Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { Box } from "@mui/system"

export const SideBar = ({ drawerWidth = 240 }) => {
	return (
		<Box
			component="nav"
			sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
		>
			<Drawer
				variant="permanent"
				open
				sx={{
					display: { xs: 'block' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
				}}
			>
				<Toolbar>
					<Typography variant="h6" noWrap component="div">
						Matías Roy Rodriguez
					</Typography>
				</Toolbar>
				<Divider />

				<List>
					{
						['January', 'February', 'March', 'April'].map(text => (
							<ListItem key={text} disablePadding>
								<ListItemButton>
									<ListItemIcon>
										<TurnedInNot />
									</ListItemIcon>
									<Grid cointainer>
										<ListItemText primary={text} />
										<ListItemText secondary={'Lorem ipsum dolor sit amet consectetur, adipisicing elit.'} />
									</Grid>
								</ListItemButton>
							</ListItem>
						))
					}
				</List>
			</Drawer>

		</Box>
	)
}
